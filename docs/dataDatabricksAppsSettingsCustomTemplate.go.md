# `dataDatabricksAppsSettingsCustomTemplate` Submodule <a name="`dataDatabricksAppsSettingsCustomTemplate` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppsSettingsCustomTemplate <a name="DataDatabricksAppsSettingsCustomTemplate" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template databricks_apps_settings_custom_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplate(scope Construct, id *string, config DataDatabricksAppsSettingsCustomTemplateConfig) DataDatabricksAppsSettingsCustomTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig">DataDatabricksAppsSettingsCustomTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig">DataDatabricksAppsSettingsCustomTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAppsSettingsCustomTemplateProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAppsSettingsCustomTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplate_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAppsSettingsCustomTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAppsSettingsCustomTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAppsSettingsCustomTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppsSettingsCustomTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProvider">GitProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepo">GitRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifest">Manifest</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProvider"></a>

```go
func GitProvider() *string
```

- *Type:* *string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepo"></a>

```go
func GitRepo() *string
```

- *Type:* *string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifest"></a>

```go
func Manifest() DataDatabricksAppsSettingsCustomTemplateManifestOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestOutputReference</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsSettingsCustomTemplateConfig <a name="DataDatabricksAppsSettingsCustomTemplateConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#provider_config DataDatabricksAppsSettingsCustomTemplate#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAppsSettingsCustomTemplateProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#provider_config DataDatabricksAppsSettingsCustomTemplate#provider_config}.

---

### DataDatabricksAppsSettingsCustomTemplateManifest <a name="DataDatabricksAppsSettingsCustomTemplateManifest" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifest {
	Name: *string,
	Version: *f64,
	Description: *string,
	ResourceSpecs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#version DataDatabricksAppsSettingsCustomTemplate#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.resourceSpecs">ResourceSpecs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#resource_specs DataDatabricksAppsSettingsCustomTemplate#resource_specs}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#version DataDatabricksAppsSettingsCustomTemplate#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}.

---

##### `ResourceSpecs`<sup>Optional</sup> <a name="ResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.resourceSpecs"></a>

```go
ResourceSpecs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#resource_specs DataDatabricksAppsSettingsCustomTemplate#resource_specs}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs {
	Name: *string,
	Description: *string,
	ExperimentSpec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec,
	JobSpec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec,
	SecretSpec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec,
	ServingEndpointSpec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec,
	SqlWarehouseSpec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec,
	UcSecurableSpec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.experimentSpec">ExperimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#experiment_spec DataDatabricksAppsSettingsCustomTemplate#experiment_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#job_spec DataDatabricksAppsSettingsCustomTemplate#job_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#secret_spec DataDatabricksAppsSettingsCustomTemplate#secret_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplate#serving_endpoint_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplate#sql_warehouse_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#uc_securable_spec DataDatabricksAppsSettingsCustomTemplate#uc_securable_spec}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}.

---

##### `ExperimentSpec`<sup>Optional</sup> <a name="ExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.experimentSpec"></a>

```go
ExperimentSpec DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#experiment_spec DataDatabricksAppsSettingsCustomTemplate#experiment_spec}.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec"></a>

```go
JobSpec DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#job_spec DataDatabricksAppsSettingsCustomTemplate#job_spec}.

---

##### `SecretSpec`<sup>Optional</sup> <a name="SecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec"></a>

```go
SecretSpec DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#secret_spec DataDatabricksAppsSettingsCustomTemplate#secret_spec}.

---

##### `ServingEndpointSpec`<sup>Optional</sup> <a name="ServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec"></a>

```go
ServingEndpointSpec DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplate#serving_endpoint_spec}.

---

##### `SqlWarehouseSpec`<sup>Optional</sup> <a name="SqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```go
SqlWarehouseSpec DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplate#sql_warehouse_spec}.

---

##### `UcSecurableSpec`<sup>Optional</sup> <a name="UcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec"></a>

```go
UcSecurableSpec DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#uc_securable_spec DataDatabricksAppsSettingsCustomTemplate#uc_securable_spec}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec {
	Permission: *string,
	SecurableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType">SecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#securable_type DataDatabricksAppsSettingsCustomTemplate#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```go
SecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#securable_type DataDatabricksAppsSettingsCustomTemplate#securable_type}.

---

### DataDatabricksAppsSettingsCustomTemplateProviderConfig <a name="DataDatabricksAppsSettingsCustomTemplateProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

&datadatabricksappssettingscustomtemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#workspace_id DataDatabricksAppsSettingsCustomTemplate#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/apps_settings_custom_template#workspace_id DataDatabricksAppsSettingsCustomTemplate#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsSettingsCustomTemplateManifestOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateManifestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs">PutResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs">ResetResourceSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceSpecs` <a name="PutResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs"></a>

```go
func PutResourceSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResourceSpecs` <a name="ResetResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs"></a>

```go
func ResetResourceSpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs">ResourceSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput">ResourceSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest">DataDatabricksAppsSettingsCustomTemplateManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceSpecs`<sup>Required</sup> <a name="ResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs"></a>

```go
func ResourceSpecs() DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceSpecsInput`<sup>Optional</sup> <a name="ResourceSpecsInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput"></a>

```go
func ResourceSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsSettingsCustomTemplateManifest
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest">DataDatabricksAppsSettingsCustomTemplateManifest</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get"></a>

```go
func Get(index *f64) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec">PutExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec">PutSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec">PutServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec">PutSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec">PutUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetExperimentSpec">ResetExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec">ResetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec">ResetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">ResetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec">ResetUcSecurableSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExperimentSpec` <a name="PutExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec"></a>

```go
func PutExperimentSpec(value DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

---

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec"></a>

```go
func PutJobSpec(value DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `PutSecretSpec` <a name="PutSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec"></a>

```go
func PutSecretSpec(value DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `PutServingEndpointSpec` <a name="PutServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```go
func PutServingEndpointSpec(value DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `PutSqlWarehouseSpec` <a name="PutSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```go
func PutSqlWarehouseSpec(value DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `PutUcSecurableSpec` <a name="PutUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```go
func PutUcSecurableSpec(value DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExperimentSpec` <a name="ResetExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetExperimentSpec"></a>

```go
func ResetExperimentSpec()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec"></a>

```go
func ResetJobSpec()
```

##### `ResetSecretSpec` <a name="ResetSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```go
func ResetSecretSpec()
```

##### `ResetServingEndpointSpec` <a name="ResetServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```go
func ResetServingEndpointSpec()
```

##### `ResetSqlWarehouseSpec` <a name="ResetSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```go
func ResetSqlWarehouseSpec()
```

##### `ResetUcSecurableSpec` <a name="ResetUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```go
func ResetUcSecurableSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpec">ExperimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpecInput">ExperimentSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput">JobSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput">SecretSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">ServingEndpointSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">SqlWarehouseSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">UcSecurableSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExperimentSpec`<sup>Required</sup> <a name="ExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpec"></a>

```go
func ExperimentSpec() DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference</a>

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec"></a>

```go
func JobSpec() DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a>

---

##### `SecretSpec`<sup>Required</sup> <a name="SecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec"></a>

```go
func SecretSpec() DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `ServingEndpointSpec`<sup>Required</sup> <a name="ServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```go
func ServingEndpointSpec() DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `SqlWarehouseSpec`<sup>Required</sup> <a name="SqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```go
func SqlWarehouseSpec() DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `UcSecurableSpec`<sup>Required</sup> <a name="UcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```go
func UcSecurableSpec() DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExperimentSpecInput`<sup>Optional</sup> <a name="ExperimentSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpecInput"></a>

```go
func ExperimentSpecInput() interface{}
```

- *Type:* interface{}

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```go
func JobSpecInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretSpecInput`<sup>Optional</sup> <a name="SecretSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```go
func SecretSpecInput() interface{}
```

- *Type:* interface{}

---

##### `ServingEndpointSpecInput`<sup>Optional</sup> <a name="ServingEndpointSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```go
func ServingEndpointSpecInput() interface{}
```

- *Type:* interface{}

---

##### `SqlWarehouseSpecInput`<sup>Optional</sup> <a name="SqlWarehouseSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```go
func SqlWarehouseSpecInput() interface{}
```

- *Type:* interface{}

---

##### `UcSecurableSpecInput`<sup>Optional</sup> <a name="UcSecurableSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```go
func UcSecurableSpecInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```go
func SecurableTypeInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksappssettingscustomtemplate"

datadatabricksappssettingscustomtemplate.NewDataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




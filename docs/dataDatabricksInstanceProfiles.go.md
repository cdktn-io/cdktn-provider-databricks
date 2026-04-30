# `dataDatabricksInstanceProfiles` Submodule <a name="`dataDatabricksInstanceProfiles` Submodule" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksInstanceProfiles <a name="DataDatabricksInstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles databricks_instance_profiles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.NewDataDatabricksInstanceProfiles(scope Construct, id *string, config DataDatabricksInstanceProfilesConfig) DataDatabricksInstanceProfiles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig">DataDatabricksInstanceProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig">DataDatabricksInstanceProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles">PutInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetInstanceProfiles">ResetInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInstanceProfiles` <a name="PutInstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles"></a>

```go
func PutInstanceProfiles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putInstanceProfiles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksInstanceProfilesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig">DataDatabricksInstanceProfilesProviderConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceProfiles` <a name="ResetInstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetInstanceProfiles"></a>

```go
func ResetInstanceProfiles()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksInstanceProfiles resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.DataDatabricksInstanceProfiles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.DataDatabricksInstanceProfiles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.DataDatabricksInstanceProfiles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.DataDatabricksInstanceProfiles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksInstanceProfiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksInstanceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksInstanceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksInstanceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfiles">InstanceProfiles</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList">DataDatabricksInstanceProfilesInstanceProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference">DataDatabricksInstanceProfilesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfilesInput">InstanceProfilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig">DataDatabricksInstanceProfilesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InstanceProfiles`<sup>Required</sup> <a name="InstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfiles"></a>

```go
func InstanceProfiles() DataDatabricksInstanceProfilesInstanceProfilesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList">DataDatabricksInstanceProfilesInstanceProfilesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksInstanceProfilesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference">DataDatabricksInstanceProfilesProviderConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceProfilesInput`<sup>Optional</sup> <a name="InstanceProfilesInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.instanceProfilesInput"></a>

```go
func InstanceProfilesInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.providerConfigInput"></a>

```go
func ProviderConfigInput() DataDatabricksInstanceProfilesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig">DataDatabricksInstanceProfilesProviderConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfiles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksInstanceProfilesConfig <a name="DataDatabricksInstanceProfilesConfig" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

&datadatabricksinstanceprofiles.DataDatabricksInstanceProfilesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	InstanceProfiles: interface{},
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.instanceProfiles">InstanceProfiles</a></code> | <code>interface{}</code> | instance_profiles block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig">DataDatabricksInstanceProfilesProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceProfiles`<sup>Optional</sup> <a name="InstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.instanceProfiles"></a>

```go
InstanceProfiles interface{}
```

- *Type:* interface{}

instance_profiles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#instance_profiles DataDatabricksInstanceProfiles#instance_profiles}

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksInstanceProfilesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig">DataDatabricksInstanceProfilesProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#provider_config DataDatabricksInstanceProfiles#provider_config}

---

### DataDatabricksInstanceProfilesInstanceProfiles <a name="DataDatabricksInstanceProfilesInstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

&datadatabricksinstanceprofiles.DataDatabricksInstanceProfilesInstanceProfiles {
	Arn: *string,
	IsMeta: interface{},
	Name: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#arn DataDatabricksInstanceProfiles#arn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.isMeta">IsMeta</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#is_meta DataDatabricksInstanceProfiles#is_meta}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#name DataDatabricksInstanceProfiles#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#role_arn DataDatabricksInstanceProfiles#role_arn}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#arn DataDatabricksInstanceProfiles#arn}.

---

##### `IsMeta`<sup>Optional</sup> <a name="IsMeta" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.isMeta"></a>

```go
IsMeta interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#is_meta DataDatabricksInstanceProfiles#is_meta}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#name DataDatabricksInstanceProfiles#name}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfiles.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#role_arn DataDatabricksInstanceProfiles#role_arn}.

---

### DataDatabricksInstanceProfilesProviderConfig <a name="DataDatabricksInstanceProfilesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

&datadatabricksinstanceprofiles.DataDatabricksInstanceProfilesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#workspace_id DataDatabricksInstanceProfiles#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/instance_profiles#workspace_id DataDatabricksInstanceProfiles#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksInstanceProfilesInstanceProfilesList <a name="DataDatabricksInstanceProfilesInstanceProfilesList" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.NewDataDatabricksInstanceProfilesInstanceProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksInstanceProfilesInstanceProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get"></a>

```go
func Get(index *f64) DataDatabricksInstanceProfilesInstanceProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstanceProfilesInstanceProfilesOutputReference <a name="DataDatabricksInstanceProfilesInstanceProfilesOutputReference" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.NewDataDatabricksInstanceProfilesInstanceProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksInstanceProfilesInstanceProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetIsMeta">ResetIsMeta</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetIsMeta` <a name="ResetIsMeta" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetIsMeta"></a>

```go
func ResetIsMeta()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMetaInput">IsMetaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMeta">IsMeta</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IsMetaInput`<sup>Optional</sup> <a name="IsMetaInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMetaInput"></a>

```go
func IsMetaInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IsMeta`<sup>Required</sup> <a name="IsMeta" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.isMeta"></a>

```go
func IsMeta() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesInstanceProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstanceProfilesProviderConfigOutputReference <a name="DataDatabricksInstanceProfilesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksinstanceprofiles"

datadatabricksinstanceprofiles.NewDataDatabricksInstanceProfilesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstanceProfilesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig">DataDatabricksInstanceProfilesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstanceProfilesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksInstanceProfiles.DataDatabricksInstanceProfilesProviderConfig">DataDatabricksInstanceProfilesProviderConfig</a>

---




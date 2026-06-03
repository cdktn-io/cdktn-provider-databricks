# `dataDatabricksAppSpace` Submodule <a name="`dataDatabricksAppSpace` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppSpace <a name="DataDatabricksAppSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space databricks_app_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpace(scope Construct, id *string, config DataDatabricksAppSpaceConfig) DataDatabricksAppSpace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig">DataDatabricksAppSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig">DataDatabricksAppSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAppSpaceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig">DataDatabricksAppSpaceProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAppSpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.DataDatabricksAppSpace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.DataDatabricksAppSpace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.DataDatabricksAppSpace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.DataDatabricksAppSpace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAppSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAppSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAppSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.effectiveUsagePolicyId">EffectiveUsagePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.effectiveUserApiScopes">EffectiveUserApiScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference">DataDatabricksAppSpaceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList">DataDatabricksAppSpaceResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.servicePrincipalClientId">ServicePrincipalClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference">DataDatabricksAppSpaceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.updater">Updater</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.usagePolicyId">UsagePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.userApiScopes">UserApiScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveUsagePolicyId`<sup>Required</sup> <a name="EffectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.effectiveUsagePolicyId"></a>

```go
func EffectiveUsagePolicyId() *string
```

- *Type:* *string

---

##### `EffectiveUserApiScopes`<sup>Required</sup> <a name="EffectiveUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.effectiveUserApiScopes"></a>

```go
func EffectiveUserApiScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAppSpaceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference">DataDatabricksAppSpaceProviderConfigOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.resources"></a>

```go
func Resources() DataDatabricksAppSpaceResourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList">DataDatabricksAppSpaceResourcesList</a>

---

##### `ServicePrincipalClientId`<sup>Required</sup> <a name="ServicePrincipalClientId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.servicePrincipalClientId"></a>

```go
func ServicePrincipalClientId() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *f64
```

- *Type:* *f64

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.status"></a>

```go
func Status() DataDatabricksAppSpaceStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference">DataDatabricksAppSpaceStatusOutputReference</a>

---

##### `Updater`<sup>Required</sup> <a name="Updater" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.updater"></a>

```go
func Updater() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.usagePolicyId"></a>

```go
func UsagePolicyId() *string
```

- *Type:* *string

---

##### `UserApiScopes`<sup>Required</sup> <a name="UserApiScopes" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.userApiScopes"></a>

```go
func UserApiScopes() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppSpaceConfig <a name="DataDatabricksAppSpaceConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig">DataDatabricksAppSpaceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#provider_config DataDatabricksAppSpace#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAppSpaceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig">DataDatabricksAppSpaceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#provider_config DataDatabricksAppSpace#provider_config}.

---

### DataDatabricksAppSpaceProviderConfig <a name="DataDatabricksAppSpaceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#workspace_id DataDatabricksAppSpace#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#workspace_id DataDatabricksAppSpace#workspace_id}.

---

### DataDatabricksAppSpaceResources <a name="DataDatabricksAppSpaceResources" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResources {
	Name: *string,
	App: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp,
	Database: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase,
	Description: *string,
	Experiment: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment,
	GenieSpace: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace,
	Job: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob,
	Postgres: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres,
	Secret: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret,
	ServingEndpoint: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint,
	SqlWarehouse: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse,
	UcSecurable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp">DataDatabricksAppSpaceResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#app DataDatabricksAppSpace#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase">DataDatabricksAppSpaceResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#database DataDatabricksAppSpace#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#description DataDatabricksAppSpace#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment">DataDatabricksAppSpaceResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#experiment DataDatabricksAppSpace#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace">DataDatabricksAppSpaceResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#genie_space DataDatabricksAppSpace#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob">DataDatabricksAppSpaceResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#job DataDatabricksAppSpace#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres">DataDatabricksAppSpaceResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#postgres DataDatabricksAppSpace#postgres}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret">DataDatabricksAppSpaceResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#secret DataDatabricksAppSpace#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint">DataDatabricksAppSpaceResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#serving_endpoint DataDatabricksAppSpace#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse">DataDatabricksAppSpaceResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#sql_warehouse DataDatabricksAppSpace#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable">DataDatabricksAppSpaceResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#uc_securable DataDatabricksAppSpace#uc_securable}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}.

---

##### `App`<sup>Optional</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.app"></a>

```go
App DataDatabricksAppSpaceResourcesApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp">DataDatabricksAppSpaceResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#app DataDatabricksAppSpace#app}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.database"></a>

```go
Database DataDatabricksAppSpaceResourcesDatabase
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase">DataDatabricksAppSpaceResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#database DataDatabricksAppSpace#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#description DataDatabricksAppSpace#description}.

---

##### `Experiment`<sup>Optional</sup> <a name="Experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.experiment"></a>

```go
Experiment DataDatabricksAppSpaceResourcesExperiment
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment">DataDatabricksAppSpaceResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#experiment DataDatabricksAppSpace#experiment}.

---

##### `GenieSpace`<sup>Optional</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.genieSpace"></a>

```go
GenieSpace DataDatabricksAppSpaceResourcesGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace">DataDatabricksAppSpaceResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#genie_space DataDatabricksAppSpace#genie_space}.

---

##### `Job`<sup>Optional</sup> <a name="Job" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.job"></a>

```go
Job DataDatabricksAppSpaceResourcesJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob">DataDatabricksAppSpaceResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#job DataDatabricksAppSpace#job}.

---

##### `Postgres`<sup>Optional</sup> <a name="Postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.postgres"></a>

```go
Postgres DataDatabricksAppSpaceResourcesPostgres
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres">DataDatabricksAppSpaceResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#postgres DataDatabricksAppSpace#postgres}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.secret"></a>

```go
Secret DataDatabricksAppSpaceResourcesSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret">DataDatabricksAppSpaceResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#secret DataDatabricksAppSpace#secret}.

---

##### `ServingEndpoint`<sup>Optional</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.servingEndpoint"></a>

```go
ServingEndpoint DataDatabricksAppSpaceResourcesServingEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint">DataDatabricksAppSpaceResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#serving_endpoint DataDatabricksAppSpace#serving_endpoint}.

---

##### `SqlWarehouse`<sup>Optional</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.sqlWarehouse"></a>

```go
SqlWarehouse DataDatabricksAppSpaceResourcesSqlWarehouse
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse">DataDatabricksAppSpaceResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#sql_warehouse DataDatabricksAppSpace#sql_warehouse}.

---

##### `UcSecurable`<sup>Optional</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources.property.ucSecurable"></a>

```go
UcSecurable DataDatabricksAppSpaceResourcesUcSecurable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable">DataDatabricksAppSpaceResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#uc_securable DataDatabricksAppSpace#uc_securable}.

---

### DataDatabricksAppSpaceResourcesApp <a name="DataDatabricksAppSpaceResourcesApp" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesApp {
	Name: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

### DataDatabricksAppSpaceResourcesDatabase <a name="DataDatabricksAppSpaceResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesDatabase {
	DatabaseName: *string,
	InstanceName: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#database_name DataDatabricksAppSpace#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#instance_name DataDatabricksAppSpace#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#database_name DataDatabricksAppSpace#database_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#instance_name DataDatabricksAppSpace#instance_name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

### DataDatabricksAppSpaceResourcesExperiment <a name="DataDatabricksAppSpaceResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesExperiment {
	ExperimentId: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment.property.experimentId">ExperimentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#experiment_id DataDatabricksAppSpace#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment.property.experimentId"></a>

```go
ExperimentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#experiment_id DataDatabricksAppSpace#experiment_id}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

### DataDatabricksAppSpaceResourcesGenieSpace <a name="DataDatabricksAppSpaceResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesGenieSpace {
	Name: *string,
	Permission: *string,
	SpaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace.property.spaceId">SpaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#space_id DataDatabricksAppSpace#space_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace.property.spaceId"></a>

```go
SpaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#space_id DataDatabricksAppSpace#space_id}.

---

### DataDatabricksAppSpaceResourcesJob <a name="DataDatabricksAppSpaceResourcesJob" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesJob {
	Id: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#id DataDatabricksAppSpace#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#id DataDatabricksAppSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

### DataDatabricksAppSpaceResourcesPostgres <a name="DataDatabricksAppSpaceResourcesPostgres" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesPostgres {
	Branch: *string,
	Database: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#branch DataDatabricksAppSpace#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#database DataDatabricksAppSpace#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#branch DataDatabricksAppSpace#branch}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#database DataDatabricksAppSpace#database}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

### DataDatabricksAppSpaceResourcesSecret <a name="DataDatabricksAppSpaceResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesSecret {
	Key: *string,
	Permission: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#key DataDatabricksAppSpace#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#scope DataDatabricksAppSpace#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#key DataDatabricksAppSpace#key}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#scope DataDatabricksAppSpace#scope}.

---

### DataDatabricksAppSpaceResourcesServingEndpoint <a name="DataDatabricksAppSpaceResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesServingEndpoint {
	Name: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#name DataDatabricksAppSpace#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

### DataDatabricksAppSpaceResourcesSqlWarehouse <a name="DataDatabricksAppSpaceResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesSqlWarehouse {
	Id: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#id DataDatabricksAppSpace#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#id DataDatabricksAppSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

### DataDatabricksAppSpaceResourcesUcSecurable <a name="DataDatabricksAppSpaceResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceResourcesUcSecurable {
	Permission: *string,
	SecurableFullName: *string,
	SecurableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable.property.securableFullName">SecurableFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#securable_full_name DataDatabricksAppSpace#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable.property.securableType">SecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#securable_type DataDatabricksAppSpace#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#permission DataDatabricksAppSpace#permission}.

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable.property.securableFullName"></a>

```go
SecurableFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#securable_full_name DataDatabricksAppSpace#securable_full_name}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable.property.securableType"></a>

```go
SecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/app_space#securable_type DataDatabricksAppSpace#securable_type}.

---

### DataDatabricksAppSpaceStatus <a name="DataDatabricksAppSpaceStatus" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

&datadatabricksappspace.DataDatabricksAppSpaceStatus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppSpaceProviderConfigOutputReference <a name="DataDatabricksAppSpaceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesAppOutputReference <a name="DataDatabricksAppSpaceResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesDatabaseOutputReference <a name="DataDatabricksAppSpaceResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesExperimentOutputReference <a name="DataDatabricksAppSpaceResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesExperimentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesExperimentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.experimentIdInput">ExperimentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.experimentId">ExperimentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.experimentIdInput"></a>

```go
func ExperimentIdInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.experimentId"></a>

```go
func ExperimentId() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesGenieSpaceOutputReference <a name="DataDatabricksAppSpaceResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesGenieSpaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesGenieSpaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.spaceIdInput">SpaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.spaceId">SpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```go
func SpaceIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.spaceId"></a>

```go
func SpaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesJobOutputReference <a name="DataDatabricksAppSpaceResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesList <a name="DataDatabricksAppSpaceResourcesList" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAppSpaceResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.get"></a>

```go
func Get(index *f64) DataDatabricksAppSpaceResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesOutputReference <a name="DataDatabricksAppSpaceResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAppSpaceResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putApp">PutApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putExperiment">PutExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putGenieSpace">PutGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putJob">PutJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putPostgres">PutPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putServingEndpoint">PutServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putSqlWarehouse">PutSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putUcSecurable">PutUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetApp">ResetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetExperiment">ResetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetGenieSpace">ResetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetJob">ResetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetPostgres">ResetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetServingEndpoint">ResetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetSqlWarehouse">ResetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetUcSecurable">ResetUcSecurable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApp` <a name="PutApp" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putApp"></a>

```go
func PutApp(value DataDatabricksAppSpaceResourcesApp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesApp">DataDatabricksAppSpaceResourcesApp</a>

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putDatabase"></a>

```go
func PutDatabase(value DataDatabricksAppSpaceResourcesDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabase">DataDatabricksAppSpaceResourcesDatabase</a>

---

##### `PutExperiment` <a name="PutExperiment" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putExperiment"></a>

```go
func PutExperiment(value DataDatabricksAppSpaceResourcesExperiment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperiment">DataDatabricksAppSpaceResourcesExperiment</a>

---

##### `PutGenieSpace` <a name="PutGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putGenieSpace"></a>

```go
func PutGenieSpace(value DataDatabricksAppSpaceResourcesGenieSpace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpace">DataDatabricksAppSpaceResourcesGenieSpace</a>

---

##### `PutJob` <a name="PutJob" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putJob"></a>

```go
func PutJob(value DataDatabricksAppSpaceResourcesJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJob">DataDatabricksAppSpaceResourcesJob</a>

---

##### `PutPostgres` <a name="PutPostgres" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putPostgres"></a>

```go
func PutPostgres(value DataDatabricksAppSpaceResourcesPostgres)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgres">DataDatabricksAppSpaceResourcesPostgres</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putSecret"></a>

```go
func PutSecret(value DataDatabricksAppSpaceResourcesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecret">DataDatabricksAppSpaceResourcesSecret</a>

---

##### `PutServingEndpoint` <a name="PutServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putServingEndpoint"></a>

```go
func PutServingEndpoint(value DataDatabricksAppSpaceResourcesServingEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpoint">DataDatabricksAppSpaceResourcesServingEndpoint</a>

---

##### `PutSqlWarehouse` <a name="PutSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putSqlWarehouse"></a>

```go
func PutSqlWarehouse(value DataDatabricksAppSpaceResourcesSqlWarehouse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouse">DataDatabricksAppSpaceResourcesSqlWarehouse</a>

---

##### `PutUcSecurable` <a name="PutUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putUcSecurable"></a>

```go
func PutUcSecurable(value DataDatabricksAppSpaceResourcesUcSecurable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurable">DataDatabricksAppSpaceResourcesUcSecurable</a>

---

##### `ResetApp` <a name="ResetApp" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetApp"></a>

```go
func ResetApp()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExperiment` <a name="ResetExperiment" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetExperiment"></a>

```go
func ResetExperiment()
```

##### `ResetGenieSpace` <a name="ResetGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetGenieSpace"></a>

```go
func ResetGenieSpace()
```

##### `ResetJob` <a name="ResetJob" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetJob"></a>

```go
func ResetJob()
```

##### `ResetPostgres` <a name="ResetPostgres" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetPostgres"></a>

```go
func ResetPostgres()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetServingEndpoint` <a name="ResetServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetServingEndpoint"></a>

```go
func ResetServingEndpoint()
```

##### `ResetSqlWarehouse` <a name="ResetSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetSqlWarehouse"></a>

```go
func ResetSqlWarehouse()
```

##### `ResetUcSecurable` <a name="ResetUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.resetUcSecurable"></a>

```go
func ResetUcSecurable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference">DataDatabricksAppSpaceResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference">DataDatabricksAppSpaceResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference">DataDatabricksAppSpaceResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference">DataDatabricksAppSpaceResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference">DataDatabricksAppSpaceResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference">DataDatabricksAppSpaceResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference">DataDatabricksAppSpaceResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference">DataDatabricksAppSpaceResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference">DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference">DataDatabricksAppSpaceResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.appInput">AppInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.experimentInput">ExperimentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.genieSpaceInput">GenieSpaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.jobInput">JobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.postgresInput">PostgresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.servingEndpointInput">ServingEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.sqlWarehouseInput">SqlWarehouseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.ucSecurableInput">UcSecurableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources">DataDatabricksAppSpaceResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.app"></a>

```go
func App() DataDatabricksAppSpaceResourcesAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesAppOutputReference">DataDatabricksAppSpaceResourcesAppOutputReference</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.database"></a>

```go
func Database() DataDatabricksAppSpaceResourcesDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesDatabaseOutputReference">DataDatabricksAppSpaceResourcesDatabaseOutputReference</a>

---

##### `Experiment`<sup>Required</sup> <a name="Experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.experiment"></a>

```go
func Experiment() DataDatabricksAppSpaceResourcesExperimentOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesExperimentOutputReference">DataDatabricksAppSpaceResourcesExperimentOutputReference</a>

---

##### `GenieSpace`<sup>Required</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.genieSpace"></a>

```go
func GenieSpace() DataDatabricksAppSpaceResourcesGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesGenieSpaceOutputReference">DataDatabricksAppSpaceResourcesGenieSpaceOutputReference</a>

---

##### `Job`<sup>Required</sup> <a name="Job" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.job"></a>

```go
func Job() DataDatabricksAppSpaceResourcesJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesJobOutputReference">DataDatabricksAppSpaceResourcesJobOutputReference</a>

---

##### `Postgres`<sup>Required</sup> <a name="Postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.postgres"></a>

```go
func Postgres() DataDatabricksAppSpaceResourcesPostgresOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference">DataDatabricksAppSpaceResourcesPostgresOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.secret"></a>

```go
func Secret() DataDatabricksAppSpaceResourcesSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference">DataDatabricksAppSpaceResourcesSecretOutputReference</a>

---

##### `ServingEndpoint`<sup>Required</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.servingEndpoint"></a>

```go
func ServingEndpoint() DataDatabricksAppSpaceResourcesServingEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference">DataDatabricksAppSpaceResourcesServingEndpointOutputReference</a>

---

##### `SqlWarehouse`<sup>Required</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.sqlWarehouse"></a>

```go
func SqlWarehouse() DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference">DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference</a>

---

##### `UcSecurable`<sup>Required</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.ucSecurable"></a>

```go
func UcSecurable() DataDatabricksAppSpaceResourcesUcSecurableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference">DataDatabricksAppSpaceResourcesUcSecurableOutputReference</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.appInput"></a>

```go
func AppInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExperimentInput`<sup>Optional</sup> <a name="ExperimentInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.experimentInput"></a>

```go
func ExperimentInput() interface{}
```

- *Type:* interface{}

---

##### `GenieSpaceInput`<sup>Optional</sup> <a name="GenieSpaceInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.genieSpaceInput"></a>

```go
func GenieSpaceInput() interface{}
```

- *Type:* interface{}

---

##### `JobInput`<sup>Optional</sup> <a name="JobInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.jobInput"></a>

```go
func JobInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PostgresInput`<sup>Optional</sup> <a name="PostgresInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.postgresInput"></a>

```go
func PostgresInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `ServingEndpointInput`<sup>Optional</sup> <a name="ServingEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.servingEndpointInput"></a>

```go
func ServingEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `SqlWarehouseInput`<sup>Optional</sup> <a name="SqlWarehouseInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.sqlWarehouseInput"></a>

```go
func SqlWarehouseInput() interface{}
```

- *Type:* interface{}

---

##### `UcSecurableInput`<sup>Optional</sup> <a name="UcSecurableInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.ucSecurableInput"></a>

```go
func UcSecurableInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppSpaceResources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResources">DataDatabricksAppSpaceResources</a>

---


### DataDatabricksAppSpaceResourcesPostgresOutputReference <a name="DataDatabricksAppSpaceResourcesPostgresOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesPostgresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesPostgresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesPostgresOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesSecretOutputReference <a name="DataDatabricksAppSpaceResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesServingEndpointOutputReference <a name="DataDatabricksAppSpaceResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesServingEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesServingEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesServingEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesSqlWarehouseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceResourcesUcSecurableOutputReference <a name="DataDatabricksAppSpaceResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceResourcesUcSecurableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceResourcesUcSecurableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableKind">SecurableKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableFullNameInput">SecurableFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableFullName">SecurableFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurableKind`<sup>Required</sup> <a name="SecurableKind" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableKind"></a>

```go
func SecurableKind() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `SecurableFullNameInput`<sup>Optional</sup> <a name="SecurableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```go
func SecurableFullNameInput() *string
```

- *Type:* *string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```go
func SecurableTypeInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableFullName"></a>

```go
func SecurableFullName() *string
```

- *Type:* *string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceResourcesUcSecurableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppSpaceStatusOutputReference <a name="DataDatabricksAppSpaceStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksappspace"

datadatabricksappspace.NewDataDatabricksAppSpaceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppSpaceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatus">DataDatabricksAppSpaceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppSpaceStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpace.DataDatabricksAppSpaceStatus">DataDatabricksAppSpaceStatus</a>

---




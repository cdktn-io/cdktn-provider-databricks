# `dataDatabricksPolicyInfo` Submodule <a name="`dataDatabricksPolicyInfo` Submodule" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfo <a name="DataDatabricksPolicyInfo" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info databricks_policy_info}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfo(scope Construct, id *string, config DataDatabricksPolicyInfoConfig) DataDatabricksPolicyInfo
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig">DataDatabricksPolicyInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig">DataDatabricksPolicyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPolicyInfoProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPolicyInfo resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.DataDatabricksPolicyInfo_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.DataDatabricksPolicyInfo_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.DataDatabricksPolicyInfo_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.DataDatabricksPolicyInfo_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPolicyInfo resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPolicyInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPolicyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask">ColumnMask</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.deny">Deny</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference">DataDatabricksPolicyInfoDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals">ExceptPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType">ForSecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.grant">Grant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference">DataDatabricksPolicyInfoGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns">MatchColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference">DataDatabricksPolicyInfoProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals">ToPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition">WhenCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput">OnSecurableFullnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput">OnSecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType">OnSecurableType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ColumnMask`<sup>Required</sup> <a name="ColumnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask"></a>

```go
func ColumnMask() DataDatabricksPolicyInfoColumnMaskOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.deny"></a>

```go
func Deny() DataDatabricksPolicyInfoDenyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference">DataDatabricksPolicyInfoDenyOutputReference</a>

---

##### `ExceptPrincipals`<sup>Required</sup> <a name="ExceptPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals"></a>

```go
func ExceptPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `ForSecurableType`<sup>Required</sup> <a name="ForSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType"></a>

```go
func ForSecurableType() *string
```

- *Type:* *string

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.grant"></a>

```go
func Grant() DataDatabricksPolicyInfoGrantOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference">DataDatabricksPolicyInfoGrantOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchColumns`<sup>Required</sup> <a name="MatchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns"></a>

```go
func MatchColumns() DataDatabricksPolicyInfoMatchColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a>

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPolicyInfoProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference">DataDatabricksPolicyInfoProviderConfigOutputReference</a>

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter"></a>

```go
func RowFilter() DataDatabricksPolicyInfoRowFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a>

---

##### `ToPrincipals`<sup>Required</sup> <a name="ToPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals"></a>

```go
func ToPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `WhenCondition`<sup>Required</sup> <a name="WhenCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition"></a>

```go
func WhenCondition() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnSecurableFullnameInput`<sup>Optional</sup> <a name="OnSecurableFullnameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput"></a>

```go
func OnSecurableFullnameInput() *string
```

- *Type:* *string

---

##### `OnSecurableTypeInput`<sup>Optional</sup> <a name="OnSecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput"></a>

```go
func OnSecurableTypeInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname"></a>

```go
func OnSecurableFullname() *string
```

- *Type:* *string

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType"></a>

```go
func OnSecurableType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfoColumnMask <a name="DataDatabricksPolicyInfoColumnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoColumnMask {
	FunctionName: *string,
	OnColumn: *string,
	Using: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn">OnColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using">Using</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn"></a>

```go
OnColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using"></a>

```go
Using interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoColumnMaskUsing <a name="DataDatabricksPolicyInfoColumnMaskUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoColumnMaskUsing {
	Alias: *string,
	Constant: *string,
	FunctionArgExpression: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant">Constant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant"></a>

```go
Constant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

##### `FunctionArgExpression`<sup>Optional</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.functionArgExpression"></a>

```go
FunctionArgExpression DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression {
	TagIntrospection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}. |

---

##### `TagIntrospection`<sup>Optional</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection"></a>

```go
TagIntrospection DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection {
	ColumnTagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue,
	TagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}. |

---

##### `ColumnTagValue`<sup>Optional</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```go
ColumnTagValue DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```go
TagValue DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue {
	ColumnAlias: *string,
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```go
ColumnAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue {
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoConfig <a name="DataDatabricksPolicyInfoConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OnSecurableFullname: *string,
	OnSecurableType: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType">OnSecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}.

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname"></a>

```go
OnSecurableFullname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}.

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType"></a>

```go
OnSecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPolicyInfoProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}.

---

### DataDatabricksPolicyInfoDeny <a name="DataDatabricksPolicyInfoDeny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoDeny {
	Privileges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny.property.privileges">Privileges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}. |

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}.

---

### DataDatabricksPolicyInfoGrant <a name="DataDatabricksPolicyInfoGrant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoGrant {
	Privileges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.property.privileges">Privileges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}. |

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}.

---

### DataDatabricksPolicyInfoMatchColumns <a name="DataDatabricksPolicyInfoMatchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoMatchColumns {
	Alias: *string,
	Condition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}.

---

### DataDatabricksPolicyInfoProviderConfig <a name="DataDatabricksPolicyInfoProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}.

---

### DataDatabricksPolicyInfoRowFilter <a name="DataDatabricksPolicyInfoRowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoRowFilter {
	FunctionName: *string,
	Using: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using">Using</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using"></a>

```go
Using interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoRowFilterUsing <a name="DataDatabricksPolicyInfoRowFilterUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoRowFilterUsing {
	Alias: *string,
	Constant: *string,
	FunctionArgExpression: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant">Constant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant"></a>

```go
Constant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

##### `FunctionArgExpression`<sup>Optional</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.functionArgExpression"></a>

```go
FunctionArgExpression DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression {
	TagIntrospection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}. |

---

##### `TagIntrospection`<sup>Optional</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection"></a>

```go
TagIntrospection DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection {
	ColumnTagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue,
	TagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}. |

---

##### `ColumnTagValue`<sup>Optional</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```go
ColumnTagValue DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```go
TagValue DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue {
	ColumnAlias: *string,
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```go
ColumnAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

&datadatabrickspolicyinfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue {
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfoColumnMaskOutputReference <a name="DataDatabricksPolicyInfoColumnMaskOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoColumnMaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoColumnMaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing"></a>

```go
func PutUsing(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing"></a>

```go
func ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using">Using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput">OnColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput">UsingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn">OnColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using"></a>

```go
func Using() DataDatabricksPolicyInfoColumnMaskUsingList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `OnColumnInput`<sup>Optional</sup> <a name="OnColumnInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput"></a>

```go
func OnColumnInput() *string
```

- *Type:* *string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput"></a>

```go
func UsingInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn"></a>

```go
func OnColumn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfoColumnMask
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection">PutTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection">ResetTagIntrospection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagIntrospection` <a name="PutTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```go
func PutTagIntrospection(value DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `ResetTagIntrospection` <a name="ResetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```go
func ResetTagIntrospection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">TagIntrospectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagIntrospection`<sup>Required</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```go
func TagIntrospection() DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `TagIntrospectionInput`<sup>Optional</sup> <a name="TagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```go
func TagIntrospectionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">ColumnAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnAliasInput`<sup>Optional</sup> <a name="ColumnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```go
func ColumnAliasInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```go
func ColumnAlias() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">PutColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">PutTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">ResetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnTagValue` <a name="PutColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```go
func PutColumnTagValue(value DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `PutTagValue` <a name="PutTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```go
func PutTagValue(value DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `ResetColumnTagValue` <a name="ResetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```go
func ResetColumnTagValue()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">ColumnTagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnTagValue`<sup>Required</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```go
func ColumnTagValue() DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```go
func TagValue() DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `ColumnTagValueInput`<sup>Optional</sup> <a name="ColumnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```go
func ColumnTagValueInput() interface{}
```

- *Type:* interface{}

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoColumnMaskUsingList <a name="DataDatabricksPolicyInfoColumnMaskUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoColumnMaskUsingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPolicyInfoColumnMaskUsingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get"></a>

```go
func Get(index *f64) DataDatabricksPolicyInfoColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoColumnMaskUsingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPolicyInfoColumnMaskUsingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression">PutFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression">ResetFunctionArgExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctionArgExpression` <a name="PutFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression"></a>

```go
func PutFunctionArgExpression(value DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant"></a>

```go
func ResetConstant()
```

##### `ResetFunctionArgExpression` <a name="ResetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression"></a>

```go
func ResetFunctionArgExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput">FunctionArgExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant">Constant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArgExpression`<sup>Required</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression"></a>

```go
func FunctionArgExpression() DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput"></a>

```go
func ConstantInput() *string
```

- *Type:* *string

---

##### `FunctionArgExpressionInput`<sup>Optional</sup> <a name="FunctionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput"></a>

```go
func FunctionArgExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant"></a>

```go
func Constant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoDenyOutputReference <a name="DataDatabricksPolicyInfoDenyOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny">DataDatabricksPolicyInfoDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfoDeny
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny">DataDatabricksPolicyInfoDeny</a>

---


### DataDatabricksPolicyInfoGrantOutputReference <a name="DataDatabricksPolicyInfoGrantOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant">DataDatabricksPolicyInfoGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfoGrant
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant">DataDatabricksPolicyInfoGrant</a>

---


### DataDatabricksPolicyInfoMatchColumnsList <a name="DataDatabricksPolicyInfoMatchColumnsList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoMatchColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPolicyInfoMatchColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get"></a>

```go
func Get(index *f64) DataDatabricksPolicyInfoMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoMatchColumnsOutputReference <a name="DataDatabricksPolicyInfoMatchColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoMatchColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPolicyInfoMatchColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfoMatchColumns
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>

---


### DataDatabricksPolicyInfoProviderConfigOutputReference <a name="DataDatabricksPolicyInfoProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoRowFilterOutputReference <a name="DataDatabricksPolicyInfoRowFilterOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoRowFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoRowFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing"></a>

```go
func PutUsing(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing"></a>

```go
func ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using">Using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput">UsingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using"></a>

```go
func Using() DataDatabricksPolicyInfoRowFilterUsingList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput"></a>

```go
func UsingInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfoRowFilter
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection">PutTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection">ResetTagIntrospection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagIntrospection` <a name="PutTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```go
func PutTagIntrospection(value DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `ResetTagIntrospection` <a name="ResetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```go
func ResetTagIntrospection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">TagIntrospectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagIntrospection`<sup>Required</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```go
func TagIntrospection() DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `TagIntrospectionInput`<sup>Optional</sup> <a name="TagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```go
func TagIntrospectionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">ColumnAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnAliasInput`<sup>Optional</sup> <a name="ColumnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```go
func ColumnAliasInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```go
func ColumnAlias() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">PutColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">PutTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">ResetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnTagValue` <a name="PutColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```go
func PutColumnTagValue(value DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `PutTagValue` <a name="PutTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```go
func PutTagValue(value DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `ResetColumnTagValue` <a name="ResetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```go
func ResetColumnTagValue()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">ColumnTagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnTagValue`<sup>Required</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```go
func ColumnTagValue() DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```go
func TagValue() DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `ColumnTagValueInput`<sup>Optional</sup> <a name="ColumnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```go
func ColumnTagValueInput() interface{}
```

- *Type:* interface{}

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoRowFilterUsingList <a name="DataDatabricksPolicyInfoRowFilterUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoRowFilterUsingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPolicyInfoRowFilterUsingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get"></a>

```go
func Get(index *f64) DataDatabricksPolicyInfoRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfoRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfo"

datadatabrickspolicyinfo.NewDataDatabricksPolicyInfoRowFilterUsingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPolicyInfoRowFilterUsingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression">PutFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression">ResetFunctionArgExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctionArgExpression` <a name="PutFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression"></a>

```go
func PutFunctionArgExpression(value DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant"></a>

```go
func ResetConstant()
```

##### `ResetFunctionArgExpression` <a name="ResetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression"></a>

```go
func ResetFunctionArgExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput">FunctionArgExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant">Constant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArgExpression`<sup>Required</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpression"></a>

```go
func FunctionArgExpression() DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput"></a>

```go
func ConstantInput() *string
```

- *Type:* *string

---

##### `FunctionArgExpressionInput`<sup>Optional</sup> <a name="FunctionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput"></a>

```go
func FunctionArgExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant"></a>

```go
func Constant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `dataDatabricksPostgresRole` Submodule <a name="`dataDatabricksPostgresRole` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresRole <a name="DataDatabricksPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role databricks_postgres_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.NewDataDatabricksPostgresRole(scope Construct, id *string, config DataDatabricksPostgresRoleConfig) DataDatabricksPostgresRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig">DataDatabricksPostgresRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig">DataDatabricksPostgresRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresRoleProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.DataDatabricksPostgresRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.DataDatabricksPostgresRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.DataDatabricksPostgresRole_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.DataDatabricksPostgresRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPostgresRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPostgresRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPostgresRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference">DataDatabricksPostgresRoleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference">DataDatabricksPostgresRoleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference">DataDatabricksPostgresRoleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresRoleProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference">DataDatabricksPostgresRoleProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.spec"></a>

```go
func Spec() DataDatabricksPostgresRoleSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference">DataDatabricksPostgresRoleSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.status"></a>

```go
func Status() DataDatabricksPostgresRoleStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference">DataDatabricksPostgresRoleStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresRoleConfig <a name="DataDatabricksPostgresRoleConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

&datadatabrickspostgresrole.DataDatabricksPostgresRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#name DataDatabricksPostgresRole#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#provider_config DataDatabricksPostgresRole#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#name DataDatabricksPostgresRole#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresRoleProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#provider_config DataDatabricksPostgresRole#provider_config}.

---

### DataDatabricksPostgresRoleProviderConfig <a name="DataDatabricksPostgresRoleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

&datadatabrickspostgresrole.DataDatabricksPostgresRoleProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#workspace_id DataDatabricksPostgresRole#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#workspace_id DataDatabricksPostgresRole#workspace_id}.

---

### DataDatabricksPostgresRoleSpec <a name="DataDatabricksPostgresRoleSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

&datadatabrickspostgresrole.DataDatabricksPostgresRoleSpec {
	Attributes: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes,
	AuthMethod: *string,
	IdentityType: *string,
	MembershipRoles: *[]*string,
	PostgresRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.authMethod">AuthMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.identityType">IdentityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.attributes"></a>

```go
Attributes DataDatabricksPostgresRoleSpecAttributes
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.authMethod"></a>

```go
AuthMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}.

---

##### `MembershipRoles`<sup>Optional</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.membershipRoles"></a>

```go
MembershipRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}.

---

##### `PostgresRole`<sup>Optional</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.postgresRole"></a>

```go
PostgresRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}.

---

### DataDatabricksPostgresRoleSpecAttributes <a name="DataDatabricksPostgresRoleSpecAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

&datadatabrickspostgresrole.DataDatabricksPostgresRoleSpecAttributes {
	Bypassrls: interface{},
	Createdb: interface{},
	Createrole: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createdb">Createdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createrole">Createrole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}. |

---

##### `Bypassrls`<sup>Optional</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.bypassrls"></a>

```go
Bypassrls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}.

---

##### `Createdb`<sup>Optional</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createdb"></a>

```go
Createdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}.

---

##### `Createrole`<sup>Optional</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createrole"></a>

```go
Createrole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}.

---

### DataDatabricksPostgresRoleStatus <a name="DataDatabricksPostgresRoleStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

&datadatabrickspostgresrole.DataDatabricksPostgresRoleStatus {
	Attributes: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes,
	AuthMethod: *string,
	IdentityType: *string,
	MembershipRoles: *[]*string,
	PostgresRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.authMethod">AuthMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.identityType">IdentityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.attributes"></a>

```go
Attributes DataDatabricksPostgresRoleStatusAttributes
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.authMethod"></a>

```go
AuthMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}.

---

##### `MembershipRoles`<sup>Optional</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.membershipRoles"></a>

```go
MembershipRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}.

---

##### `PostgresRole`<sup>Optional</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.postgresRole"></a>

```go
PostgresRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}.

---

### DataDatabricksPostgresRoleStatusAttributes <a name="DataDatabricksPostgresRoleStatusAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

&datadatabrickspostgresrole.DataDatabricksPostgresRoleStatusAttributes {
	Bypassrls: interface{},
	Createdb: interface{},
	Createrole: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createdb">Createdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createrole">Createrole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}. |

---

##### `Bypassrls`<sup>Optional</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.bypassrls"></a>

```go
Bypassrls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}.

---

##### `Createdb`<sup>Optional</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createdb"></a>

```go
Createdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}.

---

##### `Createrole`<sup>Optional</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createrole"></a>

```go
Createrole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresRoleProviderConfigOutputReference <a name="DataDatabricksPostgresRoleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.NewDataDatabricksPostgresRoleProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRoleProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRoleSpecAttributesOutputReference <a name="DataDatabricksPostgresRoleSpecAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.NewDataDatabricksPostgresRoleSpecAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRoleSpecAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetBypassrls">ResetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreatedb">ResetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreaterole">ResetCreaterole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBypassrls` <a name="ResetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetBypassrls"></a>

```go
func ResetBypassrls()
```

##### `ResetCreatedb` <a name="ResetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreatedb"></a>

```go
func ResetCreatedb()
```

##### `ResetCreaterole` <a name="ResetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreaterole"></a>

```go
func ResetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrlsInput">BypassrlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdbInput">CreatedbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createroleInput">CreateroleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdb">Createdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createrole">Createrole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassrlsInput`<sup>Optional</sup> <a name="BypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrlsInput"></a>

```go
func BypassrlsInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedbInput`<sup>Optional</sup> <a name="CreatedbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdbInput"></a>

```go
func CreatedbInput() interface{}
```

- *Type:* interface{}

---

##### `CreateroleInput`<sup>Optional</sup> <a name="CreateroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createroleInput"></a>

```go
func CreateroleInput() interface{}
```

- *Type:* interface{}

---

##### `Bypassrls`<sup>Required</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrls"></a>

```go
func Bypassrls() interface{}
```

- *Type:* interface{}

---

##### `Createdb`<sup>Required</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdb"></a>

```go
func Createdb() interface{}
```

- *Type:* interface{}

---

##### `Createrole`<sup>Required</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createrole"></a>

```go
func Createrole() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRoleSpecOutputReference <a name="DataDatabricksPostgresRoleSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.NewDataDatabricksPostgresRoleSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRoleSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetMembershipRoles">ResetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetPostgresRole">ResetPostgresRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes"></a>

```go
func PutAttributes(value DataDatabricksPostgresRoleSpecAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAuthMethod"></a>

```go
func ResetAuthMethod()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetMembershipRoles` <a name="ResetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetMembershipRoles"></a>

```go
func ResetMembershipRoles()
```

##### `ResetPostgresRole` <a name="ResetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetPostgresRole"></a>

```go
func ResetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference">DataDatabricksPostgresRoleSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRolesInput">MembershipRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRoleInput">PostgresRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethod">AuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec">DataDatabricksPostgresRoleSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributes"></a>

```go
func Attributes() DataDatabricksPostgresRoleSpecAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference">DataDatabricksPostgresRoleSpecAttributesOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethodInput"></a>

```go
func AuthMethodInput() *string
```

- *Type:* *string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `MembershipRolesInput`<sup>Optional</sup> <a name="MembershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRolesInput"></a>

```go
func MembershipRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRoleInput`<sup>Optional</sup> <a name="PostgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRoleInput"></a>

```go
func PostgresRoleInput() *string
```

- *Type:* *string

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethod"></a>

```go
func AuthMethod() *string
```

- *Type:* *string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `MembershipRoles`<sup>Required</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRoles"></a>

```go
func MembershipRoles() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRole`<sup>Required</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRole"></a>

```go
func PostgresRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresRoleSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec">DataDatabricksPostgresRoleSpec</a>

---


### DataDatabricksPostgresRoleStatusAttributesOutputReference <a name="DataDatabricksPostgresRoleStatusAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.NewDataDatabricksPostgresRoleStatusAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRoleStatusAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetBypassrls">ResetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreatedb">ResetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreaterole">ResetCreaterole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBypassrls` <a name="ResetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetBypassrls"></a>

```go
func ResetBypassrls()
```

##### `ResetCreatedb` <a name="ResetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreatedb"></a>

```go
func ResetCreatedb()
```

##### `ResetCreaterole` <a name="ResetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreaterole"></a>

```go
func ResetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrlsInput">BypassrlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdbInput">CreatedbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createroleInput">CreateroleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdb">Createdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createrole">Createrole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassrlsInput`<sup>Optional</sup> <a name="BypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrlsInput"></a>

```go
func BypassrlsInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedbInput`<sup>Optional</sup> <a name="CreatedbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdbInput"></a>

```go
func CreatedbInput() interface{}
```

- *Type:* interface{}

---

##### `CreateroleInput`<sup>Optional</sup> <a name="CreateroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createroleInput"></a>

```go
func CreateroleInput() interface{}
```

- *Type:* interface{}

---

##### `Bypassrls`<sup>Required</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrls"></a>

```go
func Bypassrls() interface{}
```

- *Type:* interface{}

---

##### `Createdb`<sup>Required</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdb"></a>

```go
func Createdb() interface{}
```

- *Type:* interface{}

---

##### `Createrole`<sup>Required</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createrole"></a>

```go
func Createrole() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRoleStatusOutputReference <a name="DataDatabricksPostgresRoleStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickspostgresrole"

datadatabrickspostgresrole.NewDataDatabricksPostgresRoleStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRoleStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetMembershipRoles">ResetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetPostgresRole">ResetPostgresRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes"></a>

```go
func PutAttributes(value DataDatabricksPostgresRoleStatusAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAuthMethod"></a>

```go
func ResetAuthMethod()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetMembershipRoles` <a name="ResetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetMembershipRoles"></a>

```go
func ResetMembershipRoles()
```

##### `ResetPostgresRole` <a name="ResetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetPostgresRole"></a>

```go
func ResetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference">DataDatabricksPostgresRoleStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRolesInput">MembershipRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRoleInput">PostgresRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethod">AuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus">DataDatabricksPostgresRoleStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributes"></a>

```go
func Attributes() DataDatabricksPostgresRoleStatusAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference">DataDatabricksPostgresRoleStatusAttributesOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethodInput"></a>

```go
func AuthMethodInput() *string
```

- *Type:* *string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `MembershipRolesInput`<sup>Optional</sup> <a name="MembershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRolesInput"></a>

```go
func MembershipRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRoleInput`<sup>Optional</sup> <a name="PostgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRoleInput"></a>

```go
func PostgresRoleInput() *string
```

- *Type:* *string

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethod"></a>

```go
func AuthMethod() *string
```

- *Type:* *string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `MembershipRoles`<sup>Required</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRoles"></a>

```go
func MembershipRoles() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRole`<sup>Required</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRole"></a>

```go
func PostgresRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresRoleStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus">DataDatabricksPostgresRoleStatus</a>

---




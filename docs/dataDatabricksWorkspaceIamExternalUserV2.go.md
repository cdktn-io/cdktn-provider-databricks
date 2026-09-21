# `dataDatabricksWorkspaceIamExternalUserV2` Submodule <a name="`dataDatabricksWorkspaceIamExternalUserV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamExternalUserV2 <a name="DataDatabricksWorkspaceIamExternalUserV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2 databricks_workspace_iam_external_user_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

datadatabricksworkspaceiamexternaluserv2.NewDataDatabricksWorkspaceIamExternalUserV2(scope Construct, id *string, config DataDatabricksWorkspaceIamExternalUserV2Config) DataDatabricksWorkspaceIamExternalUserV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config">DataDatabricksWorkspaceIamExternalUserV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config">DataDatabricksWorkspaceIamExternalUserV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksWorkspaceIamExternalUserV2ProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamExternalUserV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

datadatabricksworkspaceiamexternaluserv2.DataDatabricksWorkspaceIamExternalUserV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

datadatabricksworkspaceiamexternaluserv2.DataDatabricksWorkspaceIamExternalUserV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

datadatabricksworkspaceiamexternaluserv2.DataDatabricksWorkspaceIamExternalUserV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

datadatabricksworkspaceiamexternaluserv2.DataDatabricksWorkspaceIamExternalUserV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamExternalUserV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWorkspaceIamExternalUserV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWorkspaceIamExternalUserV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamExternalUserV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountUserStatus">AccountUserStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.externalUserId">ExternalUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fullName">FullName</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference">DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountUserStatus`<sup>Required</sup> <a name="AccountUserStatus" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountUserStatus"></a>

```go
func AccountUserStatus() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalUserId`<sup>Required</sup> <a name="ExternalUserId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.externalUserId"></a>

```go
func ExternalUserId() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fullName"></a>

```go
func FullName() DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference">DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference</a>

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamExternalUserV2Config <a name="DataDatabricksWorkspaceIamExternalUserV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

&datadatabricksworkspaceiamexternaluserv2.DataDatabricksWorkspaceIamExternalUserV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#name DataDatabricksWorkspaceIamExternalUserV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#provider_config DataDatabricksWorkspaceIamExternalUserV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#name DataDatabricksWorkspaceIamExternalUserV2#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksWorkspaceIamExternalUserV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#provider_config DataDatabricksWorkspaceIamExternalUserV2#provider_config}.

---

### DataDatabricksWorkspaceIamExternalUserV2FullName <a name="DataDatabricksWorkspaceIamExternalUserV2FullName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

&datadatabricksworkspaceiamexternaluserv2.DataDatabricksWorkspaceIamExternalUserV2FullName {

}
```


### DataDatabricksWorkspaceIamExternalUserV2ProviderConfig <a name="DataDatabricksWorkspaceIamExternalUserV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

&datadatabricksworkspaceiamexternaluserv2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#workspace_id DataDatabricksWorkspaceIamExternalUserV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#workspace_id DataDatabricksWorkspaceIamExternalUserV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference <a name="DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

datadatabricksworkspaceiamexternaluserv2.NewDataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.familyName">FamilyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName">DataDatabricksWorkspaceIamExternalUserV2FullName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.familyName"></a>

```go
func FamilyName() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksWorkspaceIamExternalUserV2FullName
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName">DataDatabricksWorkspaceIamExternalUserV2FullName</a>

---


### DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamexternaluserv2"

datadatabricksworkspaceiamexternaluserv2.NewDataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



